package com.crm.bean;

public class Customer {
    private String name;
    private String phone;
    private String sex;

    public Customer() {}

    public Customer(String name, String sex, String phone) {
        this.name = name;
        this.sex = sex;
        this.phone = phone;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }
}
