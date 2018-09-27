package pl.dstronczak.cloudcalculator.entities;

import lombok.AccessLevel;
import lombok.Data;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.Date;

@Data
public class Calculation {

    @Setter(AccessLevel.PUBLIC)
    private @Id
    String id;
    private String query;
    @Setter(AccessLevel.PUBLIC)
    private Double result;
    @Setter(AccessLevel.PUBLIC)
    private String ip;
    @Setter(AccessLevel.PUBLIC)
    private Long timestamp = new Date().getTime();


    private Calculation() {
    }

    public Calculation(String query, Double result) {
        this.query = query;
        this.result = result;
        this.ip = "";

    }

    public Calculation(String query, Double result, String ip) {
        this.query = query;
        this.result = result;
        this.ip = ip;
    }
}