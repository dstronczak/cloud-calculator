package pl.dstronczak.cloudcalculator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import pl.dstronczak.cloudcalculator.entities.Calculation;

import java.util.Date;

@SpringBootApplication
public class CloudcalculatorApplication {


    public static void main(String[] args) {
        SpringApplication.run(CloudcalculatorApplication.class, args);
    }
}
