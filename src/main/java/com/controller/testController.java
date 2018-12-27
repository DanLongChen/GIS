package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by Paser on 2018/12/11.
 */
@Controller
public class testController {
    @GetMapping("/3D")
    public ModelAndView test(){
         ModelAndView view=new ModelAndView();
         view.setViewName("3D");
         return view;
    }
    @GetMapping("/MyMap")
    public String MyMap(){
        return "MyMap";
    }

    @GetMapping("/Scene3D")
    public String Scene(){
        return "Scene3D";
    }

    @GetMapping("/CanMove")
    public String CanMove(){
        return "CanMove";
    }
    @GetMapping("/test")
    public String Mytest(){
        return "test";
    }
    @GetMapping("/test1")
    public String Mytest1(){
        return "test1";
    }
    @GetMapping("/GIS")
    public String GIS(){
        return "GIS";
    }
    @GetMapping("ck")
    public String ck(){
        return "ck";
    }
    @GetMapping("windy")
    public String windy(){
        return "windy";
    }
    @GetMapping("water")
    public String water(){
        return "water";
    }
}
