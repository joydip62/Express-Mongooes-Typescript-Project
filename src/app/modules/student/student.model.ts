import { Schema, model } from "mongoose";
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from "./student.interface";

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String },
  fatherContactNO: { type: String },
  motherName: { type: String },
  motherOccupation: { type: String },
  motherContactNO: { type: String },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNO: { type: String, required: true },
  address: { type: String, required: true },
  relation: { type: String, required: true },
});



const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ["male", "female"],
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  emergencyContactNumber: { type: String },
  bloodGroup: ["A+", "A-", "B+", "B-", "O+", "O-"],
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: { type: String },
  isActive: ["active", "blocked"],
});


// create model

export const StudentModel = model<Student>("Student", studentSchema);
