package com.questalliance.webapp;

import java.io.File;

import javax.servlet.ServletException;

import org.apache.catalina.startup.Tomcat;

public class StandaloneQuestAllianceWebapp {

	public static void main(String[] args) throws Exception {
		//set environment variable
		System.setProperty("env", "local");
		
		String basePath = "target/embedded-tomcat/";
		String webAppPath = "src/main/webapp";
		
		// clean up previous run
		
		File baseFile = new File(new File(basePath).getAbsolutePath());
		baseFile.delete();
		
		Tomcat tomcat = new Tomcat();
		tomcat.setBaseDir(basePath);
		tomcat.getHost().setAppBase(basePath);
		tomcat.getHost().setDeployOnStartup(true);
		tomcat.getHost().setAutoDeploy(true);
		tomcat.setPort(8080);
		tomcat.enableNaming();
		
		// Add Quest Alliance to embedded tomcat
		
		tomcat.addWebapp("QuestAlliance", new File(webAppPath).getAbsolutePath());
		tomcat.start();
		
		System.out.println("Standalone QuestAlliance : Running...\n\n\n");
		tomcat.getServer().await();

	}

}
