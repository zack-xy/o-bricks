package com.crm.bean;

public class Customer {
    private String name;
    private Integer age;
    private Double height;

    public Customer() {
    }

    public Customer(String name, Integer age, Double height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    public String getName() {
        return name;
    }

    public Integer getAge() {
        return age;
    }

    public Double getHeight() {
        return height;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setHeight(Double height) {
        this.height = height;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", height=" + height +
                '}';
    }
}
