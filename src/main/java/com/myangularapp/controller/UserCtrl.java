package com.myangularapp.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.myangularapp.modal.User;

@Controller

public class UserCtrl {

	//@RequestMapping("/getUser")
	@RequestMapping(value={"/getUser"}, method =  RequestMethod.GET)
	public @ResponseBody User getUser() {
		
		User user = new User();
		user.setFirstName("Venki");
		user.setLastName("Yepuri");
		
		return user;

	}
	
	//@RequestMapping("/getUsers")
	@RequestMapping(value={"/getUsers"}, method =  RequestMethod.GET)
	public @ResponseBody List<User> getUsers() {
		
		List<User> userList = new ArrayList<User>();
		
		User user1 = new User();
		user1.setFirstName("Venki");
		user1.setLastName("Yepuri");
		
		User user2 = new User();
		user2.setFirstName("Pramod");
		user2.setLastName("Varma");
		
		User user3 = new User();
		user3.setFirstName("Amit");
		user3.setLastName("Lal");
		
		User user4 = new User();
		user4.setFirstName("Snehal");
		user4.setLastName("Lastname");
		
		User user5 = new User();
		user5.setFirstName("Vishwas");
		user5.setLastName("Lastname");
		
		userList.add(user1);
		userList.add(user2);
		userList.add(user3);
		userList.add(user4);
		userList.add(user5);
		
		return userList;

	}

}
