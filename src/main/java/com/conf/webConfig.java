package com.conf;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Created by Paser on 2018/12/13.
 */
@Configuration
public class webConfig implements WebMvcConfigurer{
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
//                .allowCredentials(true)
                .allowedMethods("GET", "POST", "DELETE", "PUT");
//                .maxAge(3600);
    }
}
