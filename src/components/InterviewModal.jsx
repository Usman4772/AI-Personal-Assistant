"use client";
import { Calendar } from "lucide-react";
import {
  Modal,
  Form,
  Input,
  DatePicker,
  TimePicker,
  Button,
  message,
} from "antd";
import dayjs from "dayjs";
import axios from "axios";
import { useState } from "react";
import { apiUrl } from "@/lib/utils";

function InterviewModal({ openModal, setOpenModal }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleModalClose = () => {
    setOpenModal(false);
    form.resetFields();
  };

  // Function to disable past dates
  const disabledDate = (current) => {
    return current && current < dayjs().startOf("day");
  };

  // Handle date change
  const handleDateChange = (date) => {
    // Clear time field if date changes to force user to select valid time
    if (date && date.isSame(dayjs(), "day")) {
      form.setFieldValue("meetingTime", null);
    }
  };

  const onFinish = async (values) => {
    const {
      meetingDate,
      meetingTime,
      email,
      meetingPassword,
      meetingTopic,
      name,
    } = values;
    const date = dayjs(meetingDate);
    const time = dayjs(meetingTime);
    const interviewDate = dayjs(date)
      .hour(time.hour())
      .minute(time.minute())
      .second(time.second());

    // Additional validation to ensure the datetime is not in the past
    if (interviewDate.isBefore(dayjs())) {
      message.error(
        "Please select a future date and time for the consultation."
      );
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        apiUrl("schedule-interview"),
        {
          name,
          email,
          start_time: interviewDate,
          password: meetingPassword,
          topic: meetingTopic,
        }
      );
      if (response?.data?.success) {
        message.success("Consultation scheduled successfully!");
        handleModalClose();
      }
    } catch (error) {
      message.error(
        error?.response?.data?.message || "Failed to schedule consultation."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        title={
          <div className="flex items-center gap-2 text-gray-900">
            <Calendar className="w-5 h-5" />
            <span className="font-semibold">Schedule Consultation</span>
          </div>
        }
        open={openModal}
        onCancel={handleModalClose}
        footer={null}
        width={600}
        className="interview-modal"
        styles={{
          header: {
            backgroundColor: "#f9fafb",
            borderBottom: "1px solid #e5e7eb",
            borderRadius: "8px 8px 0 0",
            padding: "16px 24px",
          },
          body: {
            padding: "24px",
          },
        }}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Form.Item
              label={
                <span className="text-gray-700 font-medium">Full Name</span>
              }
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input
                placeholder="Enter your full name"
                className="rounded-lg border-gray-300 focus:border-gray-500 focus:ring-gray-500"
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="text-gray-700 font-medium">Email Address</span>
              }
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                placeholder="Enter your email address"
                className="rounded-lg border-gray-300 focus:border-gray-500 focus:ring-gray-500"
              />
            </Form.Item>
          </div>

          <Form.Item
            label={
              <span className="text-gray-700 font-medium">Meeting Topic</span>
            }
            name="meetingTopic"
            rules={[
              { required: true, message: "Please enter the meeting topic" },
            ]}
          >
            <Input
              placeholder="e.g., Frontend Developer Position Interview"
              className="rounded-lg border-gray-300 focus:border-gray-500 focus:ring-gray-500"
            />
          </Form.Item>

          <Form.Item
            label={
              <span className="text-gray-700 font-medium">
                Meeting Password
              </span>
            }
            name="meetingPassword"
            rules={[
              { required: true, message: "Please enter a meeting password" },
            ]}
          >
            <Input.Password
              placeholder="Enter meeting password"
              className="rounded-lg border-gray-300 focus:border-gray-500 focus:ring-gray-500"
            />
          </Form.Item>

          <div className="grid md:grid-cols-2 gap-4">
            <Form.Item
              label={
                <span className="text-gray-700 font-medium">Meeting Date</span>
              }
              name="meetingDate"
              rules={[{ required: true, message: "Please select a date" }]}
            >
              <DatePicker
                className="w-full rounded-lg border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                placeholder="Select date"
                format="YYYY-MM-DD"
                disabledDate={disabledDate}
                onChange={handleDateChange}
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="text-gray-700 font-medium">Meeting Time</span>
              }
              name="meetingTime"
              rules={[{ required: true, message: "Please select a time" }]}
            >
              <TimePicker
                className="w-full rounded-lg border-gray-300 focus:border-gray-500 focus:ring-gray-500"
                placeholder="Select time"
                format="HH:mm"
                use12Hours
              />
            </Form.Item>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <Button
              onClick={handleModalClose}
              className="px-6 py-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-800"
            >
              Cancel
            </Button>
            <Button
              htmlType="submit"
              loading={loading}
              className="px-6 py-2 bg-gray-900 text-white !hover:bg-gray-800 border-gray-900 hover:border-gray-800"
            >
              Schedule Consultation
            </Button>
          </div>
        </Form>
      </Modal>

      <style jsx global>{`
        .interview-modal .ant-modal-content {
          border-radius: 12px;
          overflow: hidden;
        }
        .interview-modal .ant-form-item-label > label {
          font-weight: 500;
          color: #374151;
        }
        .interview-modal .ant-input,
        .interview-modal .ant-picker {
          border-radius: 8px;
          border-color: #d1d5db;
        }
        .interview-modal .ant-input:focus,
        .interview-modal .ant-picker:focus,
        .interview-modal .ant-input-focused,
        .interview-modal .ant-picker-focused {
          border-color: #6b7280;
          box-shadow: 0 0 0 2px rgba(107, 114, 128, 0.1);
        }
        .interview-modal .ant-btn-primary {
          background-color: #111827;
          border-color: #111827;
        }
        .interview-modal .ant-btn-primary:hover {
          background-color: #1f2937;
          border-color: #1f2937;
        }
      `}</style>
    </>
  );
}

export default InterviewModal;
