import { Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import DrawerPopup from "../Molecules/Drawer";

export default function Description() {
  return (
    <>
      <br />
      <Heading size="md">Full Job Description</Heading>
      <br />
      <Heading size="sm">Electrical Design & Applications Engineer</Heading>

      <Text fontSize="14px" mt="10px">
        For our Machines & Automation Division we require a Candidate who has
        the inherent knowledge in Electrical Panel Design & Programming of
        Machines including Electrical / Electronics Circuit, PLC & Servo Based
        Control Systems CNC Panels & also has experience in Integration of
        various Modules of Machines & Automation Solutions. This would require
        knowledge of Hydraulics Pneumatics, Sensors & Peripheral Equipment and
        control thereof.
      </Text>
      <br />
      <Text fontSize="14px" mb="10px">
        MAIN JOB RESPOBSIBILTIES, (BUT NOT LIMITED TO) :
      </Text>
      <UnorderedList fontSize="14px" fontWeight="500">
        <ListItem>
          Electrical / Electronic ( PLC / CNC ), Hydraulic, Pneumatics Circuit
          Design
        </ListItem>
        <ListItem>
          PLC & CNC Integration & Programming (Ladder and Function Block)
        </ListItem>
        <ListItem>Source new Vendors & perform Cost Control</ListItem>
        <ListItem>
          Supervision in Manufacturing and Assembly of Machines & Automation
          Panels & Field Wiring
        </ListItem>
        <ListItem>Design Reviews and Discussions with Customers</ListItem>
        <ListItem>Preparation of Design Approval for Electricals</ListItem>
        <ListItem>Work proactively to improve Machine Performance</ListItem>
        <ListItem>Work with Team on New Products Development</ListItem>
        <ListItem>
          Knowledge of Industry 4.0 and implementation in Machines
        </ListItem>
        <ListItem>Commissioning of Machines & Automation at Site</ListItem>
        <ListItem>
          Providing After Sales Service Assistance to the Customers
        </ListItem>
      </UnorderedList>
      <br />
      <Heading size="sm">EXPERIENCE & SKILLS REQUIRED:</Heading>
      <UnorderedList fontSize="14px" fontWeight="500" mt="10px">
        <ListItem>
          Minimum 5-7 years of Experience in Panel & Control Circuit Design
        </ListItem>
        <ListItem>Hands on experience in Servo & Hydraulic Controls</ListItem>
        <ListItem>
          Experience with SIEMENS / FANUC CNC Systems, PLC & Motion Controllers
        </ListItem>
        <ListItem>Motorized Spindles , VFD Programming</ListItem>
        <ListItem>
          Knowledge of Window Based Industrial PC, C++ Programming an added
          advantage
        </ListItem>
        <ListItem>
          Working knowledge of CAD & 3D Design Software a must
        </ListItem>
        <ListItem>
          Knowledge of Industrial Interfaces (Ethernet/IP, etc.)
        </ListItem>
        <ListItem>
          Project Management capabilities along with strong inter-personal,
          leadership, and organizational skills
        </ListItem>
      </UnorderedList>
      <br />
      <Text fontSize="14px">Job Types: Full-time, Commission</Text>
      <br />
      <Text fontSize="14px">Salary: ₹30,000.00 - ₹45,000.00 per month</Text>
      <br />
      <Text fontSize="14px">Benefits : Cell phone reimbursement</Text>
      <Text fontSize="14px">
        COVID-19 considerations: <br /> Our Company follows strict Protocols for
        Covid 19. Masks are compulsory, Temperature is tested before anyone
        enters the premises. Hand Sanitizers are placed for Visitors and
        Employees use.
      </Text>
      <br />
          <hr />
          <DrawerPopup />
    </>
  );
}
