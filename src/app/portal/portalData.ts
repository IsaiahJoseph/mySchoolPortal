export interface IPortalData {
    studentId: number;
        Name: string;
        MatricNo : string; 
        Email: string;
        Phone: string;
        State: string;
        Gender: string;
        Program: string;
        Department: string;
        CurrentLevel: string;
        GraduatedLevels: {
            yr1:string;
            yr2:string;
        },
        PreviousSessions: {
            L1: string;
            L2: string;
        }
            
        ,
        imageUrl: string;
        GradStatus: string;
        CourseReg: {
            Reg: string;
            NotReg: string;
        },
        Nationality: string;
        LGA: string;
        MaritalStatus: string; 
        DOB: string;
        PlaceOfBirth: string;
        Religion: string;
        HealthRecord: string;
        OtherPhoneNumber: string;
        ContactAddress: string;
        HomeAddress: string;
        HomeTown: string;
        NextOfKinName: string; 
        NextOfKinGSM: string;
        NextofKinAddress: string;
        BloodGroup: string; 
        Genotype: string; 
        Disability: string;
        Sponsor: string;
        OtherSponsor: string;
        Sports: string;
        fees: [
            {
                StartDate: string; 
                EndDate: string;
                AmountDue: string;
                Paid: string;
                Pending: string;
                session: string;
            },
            {
                StartDate: string;
                EndDate: string;
                AmountDue: string;
                Paid: string;
                Pending: string;
                session: string;
            }
        ],
        AccountNumber: string;
        AccountBalance: string;
        Hostels: {
            Hostel: string;
            Block: string;
            RoomNo: string;
            Status: string;
            AmountPayable: string;
        },
        yr1Courses: [
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            
           
        ],
        yr2courses: [
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
            {
                courseCode: string;
                courseTitle: string;
            },
        ]
  
  }