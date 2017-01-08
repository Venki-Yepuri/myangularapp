package com.myangularapp.controller;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.myangularapp.modal.User;

@Controller
@RequestMapping("/getUser")
public class UserCtrl {

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody User getUser() {
		User user = new User();
		user.setFirstName("Venki");
		user.setLastName("Yepuri");
		return user;

	}

}
