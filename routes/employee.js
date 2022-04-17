
const router=require("express").Router();
const Employee=require("../model/employee");
router.post("/addemployee",async (req,res)=>{
    const newEmployee=new Employee({
image:req.body.image,
name:req.body.name,
occupation:req.body.occupation,
callOffice:req.body.callOffice,
callMobile:req.body.callMobile,
sms:req.body.sms,
email:req.body.email
    })
    try{
        const savedEmployee=await newEmployee.save()// implies should wait until get/save the all employee information
    res.status(200).json(savedEmployee)
    }catch(err){

        res.status(500).json(err);
    }
});
/*get employee*/
router.get("/allemployees", async (req,res) => {
    try {
      const result = await Employee.find({});
      res.status(200).json(result);
    } catch(err) {
      res.status(500).json(err);
    }
  });
  //get specfic employee by id
  router.get("/:employeeId",async(req,res)=>{ 
    try{
    const get =await Employee.findById(req.params.employeeId);
    res.status(200).json(get);
    }catch(err){
      res.status(500).json(err)
    }
  })

module.exports=router;