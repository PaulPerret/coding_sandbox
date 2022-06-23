package com.idontexist;

import java.util.List;
import java.util.logging.Logger;

/**
 * @author paul
 */
@RestController
public class RespondentController {
    
    private static final Logger LOGGER = Logger.getLogger(RespondentController.class.getName());

    @Autowired
    IRespondentManager respondentManager;
    
    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public ResponseEntity<String> testHello() {
        LOGGER.info("Saying hello");
        return new ResponseEntity<>("Hello from Gradi
