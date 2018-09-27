package pl.dstronczak.cloudcalculator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import pl.dstronczak.cloudcalculator.entities.Calculation;

import java.util.Date;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final CalculationRepository repository;

    @Autowired
    public DatabaseLoader(CalculationRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        repository.deleteAll();
        this.repository.save(new Calculation("2 + 2", (double) 4, "[Server-generated]"));
        this.repository.save(new Calculation("2 + 2 * 2", (double) 6, "[Server-generated]"));
    }
}


