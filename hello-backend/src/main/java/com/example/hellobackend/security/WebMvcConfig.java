package com.example.hellobackend.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.web.firewall.StrictHttpFirewall;
import org.springframework.web.servlet.config.annotation.*;

import java.util.Arrays;

@EnableWebMvc
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    protected final String[] allowedMethods = {"GET", "POST", "PUT", "DELETE", "OPTIONS"};
    @Value("${frontend.url}")
    private String frontendUrl;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/resources/**")
                .addResourceLocations("/resources/static/");
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOriginPatterns(frontendUrl)
                .allowedHeaders("*")
                .allowedMethods(allowedMethods)
                .allowCredentials(true);
        registry.addMapping("/**").allowedMethods("*").allowedOrigins("*");

    }
    @Bean
    public StrictHttpFirewall getStrictHttpFirewall() {
        StrictHttpFirewall strictHttpFirewall = new StrictHttpFirewall();
        strictHttpFirewall.setAllowedHttpMethods(Arrays.asList(allowedMethods));
        return strictHttpFirewall;
    }
}
