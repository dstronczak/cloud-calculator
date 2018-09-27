package pl.dstronczak.cloudcalculator;

import com.udojava.evalex.Expression;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import pl.dstronczak.cloudcalculator.entities.Calculation;

import javax.servlet.http.HttpServletRequest;


@RestController
public class CalculationController {

    private final CalculationRepository repository;

    @RequestMapping(value = "/calculate", method = {RequestMethod.GET, RequestMethod.POST})
    public Calculation calculate(@RequestParam(value = "query", defaultValue = "") String query, HttpServletRequest request) {
        try {
            Calculation c = new Calculation(query, Evaluator.evaluateMathExpression(query), request.getRemoteAddr());
            repository.save(c);
            return c;
        } catch (Expression.ExpressionException e) {
            throw new IncorrectQueryException(e);
        }


    }

    @Autowired
    public CalculationController(CalculationRepository repository) {
        this.repository = repository;
    }
}
