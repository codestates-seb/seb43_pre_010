package tenten.StackOverflowClone.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import tenten.StackOverflowClone.oath.jwt.JwtAuthenticationFilter;
import tenten.StackOverflowClone.oath.jwt.JwtTokenizer;
import tenten.StackOverflowClone.oath.jwt.JwtVerificationFilter;


@Configuration
public class SecurityConfig {

    private final JwtTokenizer jwtTokenizer;

    public SecurityConfig(JwtTokenizer jwtTokenizer) {
        this.jwtTokenizer = jwtTokenizer;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{

        http
                .headers().frameOptions().sameOrigin()
                .and()
                .cors()
                .and()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.OPTIONS).permitAll()
                        .antMatchers(HttpMethod.GET,"/*/auth/login").permitAll()
                        .antMatchers(HttpMethod.POST,"/*/auth/signup").permitAll()
                        .antMatchers(HttpMethod.PATCH).permitAll()
                        .antMatchers(HttpMethod.POST, "/*/answers/**").permitAll()
                        .antMatchers(HttpMethod.PATCH, "/*/answers/**").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/*/answers/**").permitAll()
                        .antMatchers(HttpMethod.POST, "/*/questions/**").permitAll()
                        .antMatchers(HttpMethod.PATCH, "/*/questions/**").permitAll()
                        .antMatchers(HttpMethod.GET, "/*/questions/**").permitAll()
                        .antMatchers(HttpMethod.DELETE, "/*/questions/**").permitAll()
                        .anyRequest().authenticated()
                );

        return http.build();
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer);

            jwtAuthenticationFilter.setFilterProcessesUrl("/auth/login");

            builder
                    .addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}

