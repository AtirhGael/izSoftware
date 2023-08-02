import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';



export default function ModalPopUp() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}className='btn-apply'>Apply Now</button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box  className='modal-box' style={{ overflowY: 'auto', maxHeight: '90vh' }}>
         <h1 style={{fontWeight:'bold'}} >  Senior software engineer</h1>
         <div className='job-position'>  douala-littoral-cameroon (On-site)</div>
         <h1 style={{fontSize:30,}}>Background</h1>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          The African Guarantee Fund (AGF) is a Pan-African non-bank financial institution founded by the
            Ministry of Foreign Affairs on behalf of the Government of Denmark through the Danish
            International Development Agency (DANIDA), Ministry of Foreign Affairs and Cooperation on
            behalf of the Government of Spain through the Spanish Agency for International Development
          
          </Typography>
          <h1 style={{fontSize:30,}}>Position Summary</h1>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          The African Guarantee Fund (AGF) is a Pan-African non-bank financial institution founded by the
            Ministry of Foreign Affairs on behalf of the Government of Denmark through the Danish
          </Typography>
          <h1 style={{fontSize:30,paddingTop:15}}>Desirable qualifications, knowledge skills and experiences</h1>
            <ul>
                <li>Master’s degree in Accounting, Banking, Finance, or Business Administration, CFA; </li>
                <li>A minimum of five (5) years of experience in a financial institution or in financial
                    services; </li>
                <li>Excellent knowledge in Financial Analysis; </li>
            </ul>
            <h1 style={{fontSize:30}}>Eligibility</h1>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          The position is open to bilingual French and English speakers who are from any African country.
          </Typography>

          <h1 style={{fontSize:30}}> Applications</h1>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
          Apply on email, sending one document, including a cover letter summarizing their relevance to
              this position, a full C.V. names and contact information of three referees knowledgeable about
              the candidate’s professional qualifications and work experience to:
              recruitment@africanguaranteefund.com  </Typography>
          
          <div style={{display:'flex',justifyContent:'space-between',paddingTop:20}}>
          <button className='btn-apply' >Apply Now</button>
          <button onClick={()=>setOpen(false)} className='btn-apply' >Cancel</button>

          </div>
        </Box>
      </Modal>
    </div>
  );
}
