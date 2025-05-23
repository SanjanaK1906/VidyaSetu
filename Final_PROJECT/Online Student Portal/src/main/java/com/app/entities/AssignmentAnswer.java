package com.app.entities;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
@Entity
@Table(name = "assignmentanswer")
public class AssignmentAnswer extends BaseEntity {  //inhertance

	@ManyToOne
	@JoinColumn(name = "assignmentid") // Many assignment answers belong to one assignment.
	private Assignment assignmentId;
	@ManyToOne  //Many assignment answers are evaluated by one faculty member.
	@JoinColumn(name = "facultyid")
	private User faculty;
	@NotBlank(message = "file is required")
	@Column(name = "filename")
	private String fileName;
	@Column(length = 2)
	private String grade;
	@Column(length = 50)
	private String remark;
	@Column(name = "modulename")
	private String moduleName;
	@ManyToOne //Many assignment answers belong to one student.
	@JoinColumn(name = "studentid")
	private User student;
	@Column(name = "studentname")
	private String studentName;

	public Long getFacultyId() {
		return faculty.getId();
	}

	public String getFacultyName() {
		return faculty.getName();
	}

	public Long getStudentId() {
		return student.getId();
	}

}
