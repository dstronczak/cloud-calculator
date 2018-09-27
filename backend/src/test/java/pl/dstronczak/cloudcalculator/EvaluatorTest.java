package pl.dstronczak.cloudcalculator;

import org.junit.Test;

import javax.script.ScriptException;

import static org.junit.Assert.*;

public class EvaluatorTest {
    @Test
    public void evaluateNumber() throws ScriptException {
        assertEquals((double) 2.0, (double) Evaluator.evaluateMathExpression("2"), 0);
    }

    @Test
    public void evaluateBasicMath() throws ScriptException {
        assertEquals((double) 4.0, (double) Evaluator.evaluateMathExpression("2+2"), 0);
    }

    @Test
    public void evaluateMathExpression() throws ScriptException {
        assertEquals((double) -8.0, (double) Evaluator.evaluateMathExpression("2-2*(2*2)-2/2*2"), 0);
    }

    @Test(expected = IncorrectQueryException.class)
    public void handlesIncorrectQueries() throws ScriptException {
        Evaluator.evaluateMathExpression("randomString");
    }

}