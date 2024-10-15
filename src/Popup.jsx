// Popup.jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BiX, BiAlarm, BiSend } from 'react-icons/bi';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const Popup = ({ onClose }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(new Date());

    // Get today's date
    const today = new Date();
    const minDate = today;
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());

    const handleReadyForMeet = () => {
        const timeString = selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        console.log(`Meeting scheduled for ${selectedDate?.toLocaleDateString()} at ${timeString}`);
        onClose();
    };

    const handleClockChange = (newTime) => {
        setSelectedTime(newTime);
    };

    // Helper functions to adjust time
    const incrementHour = () => {
        const newTime = new Date(selectedTime);
        newTime.setHours((newTime.getHours() + 1) % 24);
        setSelectedTime(newTime);
    };

    const decrementHour = () => {
        const newTime = new Date(selectedTime);
        newTime.setHours((newTime.getHours() - 1 + 24) % 24);
        setSelectedTime(newTime);
    };

    const incrementMinute = () => {
        const newTime = new Date(selectedTime);
        newTime.setMinutes((newTime.getMinutes() + 1) % 60);
        setSelectedTime(newTime);
    };

    const decrementMinute = () => {
        const newTime = new Date(selectedTime);
        newTime.setMinutes((newTime.getMinutes() - 1 + 60) % 60);
        setSelectedTime(newTime);
    };

    return (
        <div
            className="h-lvh fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row relative w-11/12 md:w-3/4 lg:w-1/2"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Icon */}
                <button 
                    className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-gray-800"
                    onClick={onClose}
                >
                    <BiX />
                </button>
                
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-2 text-center">Schedule Your Meeting</h2>
                    <p className="mb-4 text-center">Select a date for your meeting:</p>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        minDate={minDate}
                        maxDate={maxDate}
                        inline
                        className="border rounded-md p-2 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        calendarClassName="bg-white"
                        dayClassName={(date) => 
                            date.getDay() === 0 ? 'bg-red-200' : 'bg-white'
                        }
                        popperClassName="bg-white shadow-lg rounded-md"
                    />
                    {selectedDate && (
                        <div className="mt-2 text-center">
                            <strong>Selected Date: {selectedDate.toLocaleDateString()}</strong>
                        </div>
                    )}
                </div>
                
                <div className="md:w-1/2 md:pl-5 mt-4 md:mt-0">
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <BiAlarm className="mr-2" /> Select Time:
                    </h3>
                    <div className="flex items-center mb-2">
                        <div className="border rounded-md p-2 w-full bg-gray-100 flex items-center justify-between">
                            <span>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            <BiAlarm />
                        </div>
                    </div>
                    <Clock
                        value={selectedTime}
                        onChange={handleClockChange}
                        className="border rounded-md p-2 bg-gray-100"
                    />
                    <div className="flex justify-between mt-2">
                        <button onClick={decrementHour} className="text-blue-500">- Hour</button>
                        <button onClick={incrementHour} className="text-blue-500">+ Hour</button>
                    </div>
                    <div className="flex justify-between mt-2">
                        <button onClick={decrementMinute} className="text-blue-500">- Min</button>
                        <button onClick={incrementMinute} className="text-blue-500">+ Min</button>
                    </div>
                    <button
                        onClick={handleReadyForMeet}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 flex items-center justify-center"
                    >
                        <BiSend className="mr-2" /> Ready for Meet
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
