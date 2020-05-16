package site.barkalov.dentistApp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // forward requests from /form/showall and /form/add to their index.html
        registry.addViewController("/form/showall").setViewName(
                "forward:/index.html");
        registry.addViewController("/form/add").setViewName(
                "forward:/index.html");
    }
}
