import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BiX, BiAlarm, BiSend } from 'react-icons/bi';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import emailjs from 'emailjs-com';

const Popup = ({ onClose }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [userName, setUserName] = useState('');
    const [isEditingTime, setIsEditingTime] = useState(false);
    const [timeInput, setTimeInput] = useState('');

    const today = new Date();
    const minDate = today;
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());

    const handleReadyForMeet = () => {
        const timeString = selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        const meetingDetails = {
            name: userName,
            date: selectedDate?.toLocaleDateString(),
            time: timeString,
        };

        emailjs.send('service_dywwhws', 'template_s3gwjtl', meetingDetails, '_oj95UFH5Km7DufX9')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
            })
            .catch((error) => {
                console.error('Failed to send email. Error:', error);
            });

        onClose();
    };

    const handleClockChange = (newTime) => {
        setSelectedTime(newTime);
        setTimeInput(newTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
    };

    const handleTimeInputChange = (e) => {
        const input = e.target.value;
        setTimeInput(input);

        // Validate input format (HH:MM AM/PM)
        const timeParts = input.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
        if (timeParts) {
            let hours = parseInt(timeParts[1], 10);
            const minutes = parseInt(timeParts[2], 10);
            const amPm = timeParts[3] ? timeParts[3].toUpperCase() : '';

            if (hours >= 1 && hours <= 12 && minutes >= 0 && minutes < 60) {
                if (amPm === 'PM' && hours < 12) {
                    hours += 12; // Convert PM to 24-hour format
                } else if (amPm === 'AM' && hours === 12) {
                    hours = 0; // Convert 12 AM to 0 hours
                }
                
                const newTime = new Date(selectedTime);
                newTime.setHours(hours);
                newTime.setMinutes(minutes);
                setSelectedTime(newTime);
            }
        }
    };

    const handleTimeInputBlur = () => {
        setIsEditingTime(false);
        // Update time input when focus is lost
        const timeParts = timeInput.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
        if (timeParts) {
            let hours = parseInt(timeParts[1], 10);
            const minutes = parseInt(timeParts[2], 10);
            const amPm = timeParts[3] ? timeParts[3].toUpperCase() : '';

            if (hours >= 1 && hours <= 12 && minutes >= 0 && minutes < 60) {
                if (amPm === 'PM' && hours < 12) {
                    hours += 12; // Convert PM to 24-hour format
                } else if (amPm === 'AM' && hours === 12) {
                    hours = 0; // Convert 12 AM to 0 hours
                }

                const newTime = new Date(selectedTime);
                newTime.setHours(hours);
                newTime.setMinutes(minutes);
                setSelectedTime(newTime);
            }
        }
    };

    const incrementHour = () => {
        const newTime = new Date(selectedTime);
        newTime.setHours((newTime.getHours() + 1) % 24);
        setSelectedTime(newTime);
        setTimeInput(newTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
    };

    const decrementHour = () => {
        const newTime = new Date(selectedTime);
        newTime.setHours((newTime.getHours() - 1 + 24) % 24);
        setSelectedTime(newTime);
        setTimeInput(newTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
    };

    const incrementMinute = () => {
        const newTime = new Date(selectedTime);
        newTime.setMinutes((newTime.getMinutes() + 1) % 60);
        setSelectedTime(newTime);
        setTimeInput(newTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
    };

    const decrementMinute = () => {
        const newTime = new Date(selectedTime);
        newTime.setMinutes((newTime.getMinutes() - 1 + 60) % 60);
        setSelectedTime(newTime);
        setTimeInput(newTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
    };

    return (
        <div
            className="h-lvh fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div
                className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row relative w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-gray-800 border-none"
                    onClick={onClose}
                >
                    <BiX />
                </button>
                
                <div className="flex flex-col md:w-1/2">
                    <h2 className="text-xl md:text-2xl font-bold mb-2 text-center">Schedule Your Meeting</h2>
                    <p className="mb-4 text-center text-sm md:text-base">Enter your name:</p>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Your Name"
                        className="border rounded-md p-2 mb-4 w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="mb-4 text-center text-sm md:text-base">Select a date for your meeting:</p>
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
                
                <div className="flex flex-col md:w-1/2 md:pl-5 mt-4 md:mt-0">
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <BiAlarm className="mr-2" /> Select Time:
                    </h3>
                    <div
                        className="border rounded-md p-2 w-full bg-gray-100 flex items-center justify-between mb-2 cursor-pointer"
                        onClick={() => setIsEditingTime(true)}
                    >
                        {isEditingTime ? (
                            <input
                                type="text"
                                value={timeInput}
                                onChange={handleTimeInputChange}
                                onBlur={handleTimeInputBlur}
                                className="border-none bg-transparent w-full"
                                placeholder="HH:MM AM/PM"
                                autoFocus
                            />
                        ) : (
                            <span>{selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</span>
                        )}
                        <BiAlarm />
                    </div>
                    <Clock
                        value={selectedTime}
                        onChange={handleClockChange}
                        className="border rounded-md p-2 bg-gray-100"
                    />
                    <div className="flex justify-between mt-2">
                        <button onClick={decrementHour} className="text-blue-500 border-none">- Hour</button>
                        <button onClick={incrementHour} className="text-blue-500 border-none">+ Hour</button>
                    </div>
                    <div className="flex justify-between mt-2">
                        <button onClick={decrementMinute} className="text-blue-500 border-none">- Min</button>
                        <button onClick={incrementMinute} className="text-blue-500 border-none">+ Min</button>
                    </div>
                    <button
                        onClick={handleReadyForMeet}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 flex items-center justify-center border-none"
                    >
                        <BiSend className="mr-2" /> Ready for Meet
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
