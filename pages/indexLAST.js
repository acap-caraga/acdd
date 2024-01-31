import { useState, useEffect } from 'react';
import Layout from "../components/Layout";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const getDatesInRange = (start, end) => {
  const dates = [];
  let currentDate = new Date(start);

  while (currentDate <= end) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};

const validateEndDate = (endDate, currentMonth) => {
  return endDate.getMonth() === currentMonth;
};

const Index = () => {
  const metaInfo = {
    title: "DTR",
  };

  const [startDate, setStartDate] = useState(null);  // Set initial state to null
  const [endDate, setEndDate] = useState(null);
  const [dateRange, setDateRange] = useState([null]);

  useEffect(() => {
    // Get the current date
    const currentDate = new Date();
    
    // Set the start date to the 1st of the current month
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    setStartDate(startOfMonth);
    
    // Set the end date to the 15th of the current month
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 15);
    setEndDate(endOfMonth);
  }, []);

  useEffect(() => {
    setDateRange(getDatesInRange(startDate, endDate));
  }, [startDate, endDate]);

  const handleEndDateChange = (date) => {
    if (validateEndDate(date, startDate.getMonth())) {
      setEndDate(date);
    }
  };

  return (
    <Layout className="" metaInfo={metaInfo}>
      <div className="grid gap-x-2 gap-y-4 grid-cols-2 ">
        <div className="w-full">
        <div className="flex items-start space-x-4 text-sm">
        <label htmlFor="startDate">Date from : </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MMMM d, yyyy"
            showMonthYearPicker
            className="w-30 h-4 font-bold p-1"
          />
          <label htmlFor="endDate">Date to : </label>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            dateFormat="MMMM d, yyyy"
            showMonthYearPicker
            placeholderText="Select Date To"
            filterDate={(date) => validateEndDate(date, startDate?.getMonth())}
            className="w-30 h-4 font-bold p-1"
          />

        </div>
          <hr className="border-black border-1" /><br />
          <div className="text-sm mb-5"> CIVIL SERVICE FORM NO.48 </div>
          <div className="font-bold text-2xl text-center"> Daily Time Record</div>
          <div className="font-bold text-xl text-center mt-5"> Alaan, Jeff</div>
          <div className="text-center text-sm"> (Name) </div>

          

          <div className="w-1/2 h-1"> </div>

          <table className="table-fixed w-full mx-auto">
<thead>
<tr className="border-2 border-black">
<td rowSpan={2} style={{ width: '25px' }} className="border-2 border-black text-left text-sm"> Day</td>
<td colSpan={2} style={{ width: '85px' }} className="border-2 border-black font-bold text-center text-sm">A.M.</td>
<td colSpan={2} style={{ width: '85px' }} className="border-2 border-black font-bold text-center text-sm">P.M.</td>
<td colSpan={2} style={{ width: '65px' }}  className="border-2 border-black font-bold text-center text-sm">Undertime</td>
</tr>
<tr className="border-2 border-black text-sm">
<td className="border-2 border-black text-sm">Time In</td>
<td className="border-2 border-black text-sm">Time Out</td>
<td className="border-2 border-black text-sm">Time In</td>
<td className="border-2 border-black text-sm">Time Out</td>
<td className="border-2 border-black text-sm">Hours</td>
<td className="border-2 border-black text-sm">Minutes</td>
</tr>
</thead>

{ getDatesInRange(startDate, endDate).map(function(item, index) {
return (
<tbody>
{item.getDay() == 0 && 
    <tr className="border-2 border-black">
        <td className="border-2 border-black text-sm text-center"> {index + 1}</td>
        <td colSpan={6} className="border-2 border-black text-red-600 text-center tracking-wide">S u n d a y</td>
    </tr>
}
{item.getDay() == 6 && 
<tr className="border-2 border-black">
    <td className="border-2 border-black text-sm text-center"> {index + 1}</td>
    <td colSpan={6} className="border-2 border-black text-red-600 text-center tracking-wide">S a t u r d a y</td>
</tr>
}

{item.getDay() != 6 && item.getDay() != 0 && 
  <tr className="border-2 border-black">
    <td className="border-2 border-black text-sm text-center"> {index + 1}</td>
    <td className="border-2 border-black text-sm text-center"></td>
    <td className="border-2 border-black text-sm text-center"></td>
    <td className="border-2 border-black text-sm text-center"></td>
    <td className="border-2 border-black text-sm text-center"></td>
    <td className="border-2 border-black text-sm text-center"></td>
    <td className="border-2 border-black text-sm text-center"></td>
</tr>
}

</tbody>

)


})
} 

</table>

          <div className="text-center text-sm"> [T]-Travel [L]-Leave [H]-Holiday [OB]- Official Business </div>
          <hr className="border-black border-2" />
          <div className="text-sm indent-8">
          I CERTIFY on my honor that above is a true and correct
report of the hours of work performed, record of which was made
daily at the time of arrival at and departure from office.
          </div>
          <div className="font-bold text-lg text-center mt-5"> Alaan, Jeff</div>
          <hr className="border-black border-2" /><br />
          <hr className="border-black border-1" />
          <div className="text-sm mb-5">Verified as to the prescribed office hours.</div>
          <style jsx global>{`
            @media print {
              .page-break-after-always {
                page-break-after: always;
              }
            }
          `}</style>
          <hr className="border-black border-1 page-break-after-always" />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
