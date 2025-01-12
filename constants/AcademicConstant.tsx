export const MY_EDUCATION = 'Education';
import { LiaUniversitySolid } from 'react-icons/lia';
import { IoSchoolOutline } from 'react-icons/io5';
import { LuSchool2 } from 'react-icons/lu';

export const ICON_SIZE = 24;
export const academicDegrees = [
  {
    title: 'BSS in Economics',
    institute: 'Patiya Government College',
    passingYear: 'Dropout',
    gpa: '',
    icon: <LiaUniversitySolid color="#db2777" fontSize={ICON_SIZE} />,
  },
  {
    title: 'Higher Secondary School certificate',
    institute: 'Patiya Government College',
    passingYear: 'Passing year 2020',
    gpa: 'GPA 4.42/5.00',
    icon: <IoSchoolOutline color="#db2777" fontSize={ICON_SIZE} />,
  },
  {
    title: 'Secondary School certificate',
    institute: 'Chatary Union High School',
    passingYear: 'Passing year 2018',
    gpa: 'GPA 4.11/5.00',
    icon: <LuSchool2 color="#db2777" fontSize={ICON_SIZE} />,
  },
];
