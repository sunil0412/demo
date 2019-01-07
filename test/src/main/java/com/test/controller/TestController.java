package com.test.controller;


import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;



@JsonIgnoreProperties(ignoreUnknown = true)
@Controller
@EnableWebMvc
public class TestController {
	
	
	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public @ResponseBody String showExternalServices() {
		//ModelMap model = new ModelMap();
		//model.addAttribute("service", service);
		return "Hi";
	}

	
 
    
    
   }


