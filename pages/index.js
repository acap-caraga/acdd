import Layout from "../components/Layout";
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const index = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDays, setSelectedDays] = useState("All");
  const [attendance, setAttendance] = useState();

  const metaInfo = {
    title: "DTR",
    metaKeywords: "",
    metaDesc: "",
  };

  const getDatesInRange = (startDate, endDate) => {
    const date = new Date(startDate.getTime());
    const dates = [];
    while (date <= endDate) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  const attendanceDate = attendance && attendance[0].Date;
  let date_month, date_year, date_day;

  if (attendanceDate) {
    date_month = selectedDate.getMonth() + 1;
    date_year = selectedDate.getFullYear();
    date_day = selectedDate.getDate();
  }

  let d1, d2, lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);

  switch (selectedDays) {
    case "All":
      d1 = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
      d2 = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), lastDay.getDate());
      break;
    case "1-15":
      d1 = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
      d2 = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 15);
      break;
    case "16-31":
      d1 = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 16);
      d2 = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0); // Set to the last day of the month
      break;
    default:
      d1 = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
      d2 = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), lastDay.getDate());
  }

  const dtr_view = async() => {
    const response = await fetch("/api/attendance_view");
    const json = await response.json();
    setAttendance(json)
  }

  useEffect(() => {
    const fetchData = async () => {
      await dtr_view();
    };
    fetchData();
  }, []);

  return (
    <Layout className="" metaInfo={metaInfo}>
      <div className="grid gap-x-2 gap-y-4 grid-cols-2">

      <div className="w-full"> <span className="text-sm mb-5 w-full">CIVIL SERVICE FORM NO.48 </span>
        <div className="font-bold text-xl text-center"> Daily Time Record</div>
        <div className="font-bold text-2xl text-center mt-5">{attendance && attendance[0].Name}</div>
        <div className="text-center text-sm"> (Name) </div>
        <div className="flex items-start space-x-4 text-2xl print:hidden w-full">
      
          <label htmlFor="dropdown">Date from : </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="MMMM"
              showMonthYearPicker
              className="w-1/2 h-4 font-bold p-1"
            />
            <select
              id="dropdown"
              className="font-bold"
              value={selectedDays}
              onChange={(e) => setSelectedDays(e.target.value)}
            >
              <option value="All">All</option>
              <option value="1-15">1 - 15</option>
              <option value="16-31">16 - 31</option>
            </select>
            <span className="font-bold">{selectedDate.getFullYear()}</span>
            </div>

        <div className=""></div>
        <div className="text-left text-2xl">
        <span className="text-Left text-2xl">Date From : </span>
        <span className="font-bold text-left text-2xl">
          {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(selectedDate)}{' '}
          {selectedDays === 'All'
            ? `1 - ${new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate()}`
            : selectedDays === '1-15'
            ? '1 - 15'
            : '16 - ' + new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate()}, {selectedDate.getFullYear()}
        </span>
        </div>
        
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

        {getDatesInRange(d1, d2).map(function (item, index) {
          const startIndex = selectedDays === '16-31' ? 16 : 1;
          const currentIndex = index + startIndex;

          const matchingDate = attendance && attendance.find(day => {
            const dayNumber = new Date(day.Date).getDate();
            return dayNumber === currentIndex;
          });
          
          const isMatchingMonthAndYear =
            selectedDate.getFullYear() === (attendance && attendance[0]?.Year) &&
            selectedDate.getMonth() + 1 === (attendance && attendance[0]?.Month);
          
          if (
            selectedDate.getDay() !== 6 &&
            selectedDate.getDay() !== 0 &&
            attendance &&
            isMatchingMonthAndYear &&
            attendance[0].Name === matchingDate?.Name
          ) {
            return (
              <tbody key={index}>
                <tr className="border-2 border-black">
                  <td className="border-2 border-black text-sm text-center">{currentIndex}</td>
                  <td className="border-2 border-black text-sm text-center">{matchingDate?.AM_In}</td>
                  <td className="border-2 border-black text-sm text-center">{matchingDate?.AM_Out}</td>
                  <td className="border-2 border-black text-sm text-center">{matchingDate?.PM_In}</td>
                  <td className="border-2 border-black text-sm text-center">{matchingDate?.PM_Out}</td>
                  <td className="border-2 border-black text-sm text-center"></td>
                  <td className="border-2 border-black text-sm text-center"></td>
                </tr>
              </tbody>
            );
          } else {
            return (
              <tbody key={index}>
                {item.getDay() == 0 && (
                  <tr className="border-2 border-black">
                    <td className="border-2 border-black text-sm text-center"> {index + 1}</td>
                    <td colSpan={6} className="border-2 border-black text-red-600 text-center tracking-wide">S u n d a y</td>
                  </tr>
                )}
                {item.getDay() == 6 && (
                  <tr className="border-2 border-black">
                    <td className="border-2 border-black text-sm text-center"> {index + 1}</td>
                    <td colSpan={6} className="border-2 border-black text-red-600 text-center tracking-wide">S a t u r d a y</td>
                  </tr>
                )}

                {item.getDay() != 6 && item.getDay() != 0 && (
                  <tr className="border-2 border-black">
                    <td className="border-2 border-black text-sm text-center"> {index + 1}</td>
                    <td className="border-2 border-black text-sm text-center"></td>
                    <td className="border-2 border-black text-sm text-center"></td>
                    <td className="border-2 border-black text-sm text-center"></td>
                    <td className="border-2 border-black text-sm text-center"></td>
                    <td className="border-2 border-black text-sm text-center"></td>
                    <td className="border-2 border-black text-sm text-center"></td>
                  </tr>
                )}
              </tbody>
            );
          }
        })}
        </table>

        <div className="text-center text-sm"> [T]-Travel [L]-Leave [H]-Holiday [OB]- Official Business </div>
        <hr className="border-black border-2" />
        <div className="text-sm indent-8">
        I CERTIFY on my honor that above is a true and correct
        report of the hours of work performed, record of which was made
        daily at the time of arrival at and departure from office.
        </div>
        <div className="text-lg text-center mt-2">{attendance && attendance[0].Name}</div>
        <hr className="border-black border-2" /><br />
        <hr className="border-black border-1" />
        <div className="text-sm mb-5">Verified as to the prescribed office hours.</div>
        <style jsx global>{`
          @media print {
            .page-break-after-always {
              page-break-after: always;
              margin: 0;
            }
          }
        `}</style>
        <hr className="border-black border-1 page-break-after-always" />
        </div>
      </div>

    </Layout>
  );
};

export default index;