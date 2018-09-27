package pl.dstronczak.cloudcalculator;


import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import pl.dstronczak.cloudcalculator.entities.Calculation;

public interface CalculationRepository extends MongoRepository<Calculation, String> {

}