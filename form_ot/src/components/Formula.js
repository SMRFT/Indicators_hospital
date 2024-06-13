// src/components/EmergencyRoomData.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { CSVLink } from 'react-csv';
import './Formuls.css';
const EmergencyRoomData = () => {
  const [data, setData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    if (!selectedDate) {
      setError('Year and month are required');
      return;
    }

    const year = format(selectedDate, 'yyyy');
    const month = format(selectedDate, 'MM');

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://127.0.0.1:8000/formula-data/`, {
        params: {
          year: year,
          month: month
        }
      });
      setData(response.data);
    } catch (error) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data on component mount

  const csvData = data ? Object.entries(data).map(([param, value]) => ({ Parameter: param, Value: value })) : [];

  return (
    <div className="container">
      <h1>Formula Data</h1>
      <div className="picker-container">
        <label>
          Select Month and Year:
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            className="date-picker"
          />
        </label>
        <button onClick={fetchData} className="fetch-button">Fetch Data</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <div>
          <div className="csv-button-container">
            <CSVLink data={csvData} filename={`formula_data_${format(selectedDate, 'MM_yyyy')}.csv`} className="csv-button">
              Export CSV
            </CSVLink>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data).map(([param, value]) => (
                <tr key={param}>
                  <td>{param}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EmergencyRoomData;
