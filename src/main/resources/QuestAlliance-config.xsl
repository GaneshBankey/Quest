<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"   
   xmlns:mvc="http://www.springframework.org/schema/mvc"
   xmlns:context="http://www.springframework.org/schema/context"
   xmlns:util="http://www.springframework.org/schema/util"
   xmlns:aop="http://www.springframework.org/schema/aop"
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="
   http://www.springframework.org/schema/beans     
   http://www.springframework.org/schema/beans/spring-beans.xsd
   http://www.springframework.org/schema/mvc     
   http://www.springframework.org/schema/mvc/spring-mvc.xsd
   http://www.springframework.org/schema/util     
   http://www.springframework.org/schema/util/spring-util.xsd
   http://www.springframework.org/schema/aop     
   http://www.springframework.org/schema/aop/spring-aop.xsd
   http://www.springframework.org/schema/context 
   http://www.springframework.org/schema/context/spring-context.xsd">

   <context:component-scan base-package="com.questalliance.webapp.common" />
 
</beans>