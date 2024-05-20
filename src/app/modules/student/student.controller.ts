import { Request, Response } from "express";
import { StudentService } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    // request
    const student = req.body.students;

    // will class service
    const result = await StudentService.createStudentIntoDB(student);

    // response
    res.status(200).json({
      success: true,
      message: "Student created successfully",
      date: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getStudent = async (req: Request, res: Response) => {
    try {
        const result = await StudentService.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: "Student are retrieved successfully",
            date: result,
        });
    } catch (error) {
        console.log(error);
    }
}

const getStudentById = async (req: Request, res: Response) => { 
    try {
        const {studentId} = req.params;

        const result = await StudentService.getSingleStudentFromDB(studentId);
        res.status(200).json({
          success: true,
          message: "Student is retrieved successfully",
          date: result,
        });
    } catch (error) {
        console.log(error);
    }
}

export const StudentController = {
  createStudent,
  getStudent,
  getStudentById,
};
