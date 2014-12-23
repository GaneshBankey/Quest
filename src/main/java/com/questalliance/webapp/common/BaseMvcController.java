package com.questalliance.webapp.common;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.questalliance.entity.BaseModel;

@Controller
public class BaseMvcController {

	private static final Logger logger = LoggerFactory
			.getLogger(BaseMvcController.class);

	@RequestMapping(value = "/index")
	public ModelAndView handleIndex() {
		return new ModelAndView("index", new BaseModel());
	}

	public ModelAndView handleError(
			@RequestParam(value = "errorMessage", required = false) String errorMessage) {
		BaseModel model = new BaseModel();
		model.put("errorMessage", errorMessage);
		return new ModelAndView("error", model);
	}
}
