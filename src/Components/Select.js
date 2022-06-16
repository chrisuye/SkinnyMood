import React from 'react';

const Select = ({month, months, year, setMonth, setYear}) => {
    return (
        <div className='calendar-header-bottom'>
                  <select className='calendar-header-select' onChange={(e) => setMonth(months.indexOf(e.target.value))}>
                      <option selected= {month === 0 ? 'selected' :''} value='January'>January</option>
                      <option selected= {month === 1 ? 'selected' :''} value='February'>February</option>
                      <option selected= {month === 2 ? 'selected' :''} value='March'>March</option>
                      <option selected= {month === 3 ? 'selected' :''} value='April'>April</option>
                      <option selected= {month === 4 ? 'selected' :''} value='May'>May</option>
                      <option selected= {month === 5 ? 'selected' :''} value='June'>June</option>
                      <option selected= {month === 6 ? 'selected' :''} value='July'>July</option>
                      <option selected= {month === 7 ? 'selected' :''} value='August'>August</option>
                      <option selected= {month === 8 ? 'selected' :''} value='September'>September</option>
                      <option selected= {month === 9 ? 'selected' :''} value='October'>October</option>
                      <option selected= {month === 10 ? 'selected' :''} value='November'>November</option>
                      <option selected= {month === 11 ? 'selected' :''} value='December'>December</option>
                  </select>
                  <select className='calendar-header-select' onChange={(e) => setYear(Number(e.target.value))}>
                      <option selected= {year === 2020 ? 'selected' :''} value='2020'>2020</option>
                      <option selected= {year === 2021 ? 'selected' :''} value='2021'>2021</option>
                      <option selected= {year === 2022 ? 'selected' :''} value='2022'>2022</option>
                      <option selected= {year === 2023 ? 'selected' :''} value='2023'>2023</option>
                      <option selected= {year === 2024 ? 'selected' :''} value='2024'>2024</option>
                      <option selected= {year === 2025 ? 'selected' :''} value='2025'>2025</option>
                      <option selected= {year === 2026 ? 'selected' :''} value='2026'>2026</option>
                      <option selected= {year === 2027 ? 'selected' :''} value='2027'>2027</option>
                      <option selected= {year === 2028 ? 'selected' :''} value='2028'>2028</option>
                      <option selected= {year === 2029 ? 'selected' :''} value='2029'>2029</option>
                      <option selected= {year === 2030 ? 'selected' :''} value='2030'>2030</option>
                  </select>
              </div>
    );
}

export default Select;
