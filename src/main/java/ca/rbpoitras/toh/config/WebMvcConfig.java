package ca.rbpoitras.toh.config;

import org.springframework.boot.autoconfigure.web.ResourceProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.DispatcherServlet;
import org.springframework.web.servlet.config.annotation.*;
import org.springframework.web.servlet.resource.PathResourceResolver;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import javax.inject.Inject;
import java.io.IOException;

//@EnableWebMvc
@ComponentScan
@EnableConfigurationProperties({ ResourceProperties.class })
@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

//  @Inject
//  private ResourceProperties resourceProperties = new ResourceProperties();

  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
//    Long cachePeriod = resourceProperties.getCache().getPeriod().getSeconds();

//    final String[] staticLocations = resourceProperties.getStaticLocations();
    final String[] staticLocations = {
      "classpath:/static/",
      "classpath:/static/assets/",
    };
    final String[] indexLocations = new String[staticLocations.length];
    for (int i = 0; i < staticLocations.length; i++) {
      indexLocations[i] = staticLocations[i] + "index.html";
    }
    registry.addResourceHandler(
      "/**/*.css",
      "/**/*.html",
      "/**/*.js",
      "/**/*.json",
      "/**/*.bmp",
      "/**/*.jpeg",
      "/**/*.jpg",
      "/**/*.gif",
      "/**/*.ico",
      "/**/*.png",
      "/**/*.ttf",
      "/**/*.wav",
      "/**/*.mp3",
      "/**/*.eot",
      "/**/*.svg",
      "/**/*.woff",
      "/**/*.woff2",
      "/**/*.map"
    )
      .addResourceLocations(staticLocations)
      .setCachePeriod(3600);

    registry.addResourceHandler("/**")
      .addResourceLocations(indexLocations)
      .setCachePeriod(3600)
      .resourceChain(true)
      .addResolver(new PathResourceResolver());
  }

  @Override
  public void addViewControllers(ViewControllerRegistry registry) {
    registry.addViewController("/").setViewName("forward:/index.html");
  }

//  @Bean
//  public InternalResourceViewResolver viewResolver() {
//    InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
//    viewResolver.setPrefix("/WEB-INF/views/");
//    viewResolver.setSuffix(".jsp");
//    return viewResolver;
//  }
//
//  @Bean
//  // Only used when running in embedded servlet
//  public DispatcherServlet dispatcherServlet() {
//    return new DispatcherServlet();
//  }
//
//  @Override
//  public void configureDefaultServletHandling(
//    DefaultServletHandlerConfigurer configurer) {
//    configurer.enable();
//  }

}
