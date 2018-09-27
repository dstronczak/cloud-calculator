package pl.dstronczak.cloudcalculator;

import com.udojava.evalex.Expression;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.UNPROCESSABLE_ENTITY)
public class IncorrectQueryException extends RuntimeException {

    public IncorrectQueryException(Throwable cause) {
        super(cause);
    }
}
