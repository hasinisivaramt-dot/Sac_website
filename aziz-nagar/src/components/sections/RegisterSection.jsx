import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, ChevronDown, UploadCloud, CheckCircle2, ImageIcon } from "lucide-react";
import { motion } from "framer-motion";

const CAMPUS_OPTIONS = ["Aziz Nagar", "Bachupally", "GBS"];

const DEPARTMENT_OPTIONS = [
  { code: "CSE", full: "Computer Science and Engineering" },
  { code: "ECE", full: "Electronics and Communication Engineering" },
  { code: "AI-DS", full: "Artificial Intelligence and Data Science" },
  { code: "EE", full: "Electrical Engineering" },
  { code: "BCA", full: "Bachelor of Computer Applications" },
  { code: "BBA", full: "Bachelor of Business Administration" },
  { code: "MBA", full: "Master of Business Administration" },
];

const YEAR_OPTIONS = ["Y26", "Y25", "Y24", "Y23", "Y22", "Y21", "Y20"];

const GENDER_OPTIONS = ["Male", "Female", "Other"];

const RESIDENCE_OPTIONS = ["College Hostel", "Day-Scholar", "Private Hostel"];

const CLUB_OPTIONS = [
  "Photography & Editing",
  "Film Making",
  "Dance",
  "Music",
  "Journalism",
  "Literature",
  "Arts",
  "Fashion",
];

const SOCIAL_WING_OPTIONS = ["SVR", "Social Equity", "Safe Life"];

const initialFormState = {
  fullName: "",
  universityId: "",
  campus: "",
  department: "",
  academicYear: "",
  dateOfBirth: "",
  universityEmail: "",
  mobileNumber: "",
  gender: "",
  residence: "",
  clubName: "",
  socialWing: "",
};

function FieldLabel({ children }) {
  return (
    <label className="mb-1.5 block text-sm font-semibold text-[#272329]">
      {children}
    </label>
  );
}

function TextField({ label, error, ...props }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input
        {...props}
        className={`w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-[#272329] placeholder:text-slate-400 outline-none transition-colors focus:border-[#6D0826] focus:ring-2 focus:ring-[#6D0826]/15 ${
          error ? "border-red-400" : "border-slate-300"
        }`}
      />
      {error && <p className="mt-1 text-xs font-medium text-red-500">{error}</p>}
    </div>
  );
}

function SelectField({ label, error, children, ...props }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <div className="relative">
        <select
          {...props}
          className={`w-full appearance-none rounded-lg border bg-white px-4 py-2.5 pr-10 text-sm text-[#272329] outline-none transition-colors focus:border-[#6D0826] focus:ring-2 focus:ring-[#6D0826]/15 ${
            error ? "border-red-400" : "border-slate-300"
          }`}
        >
          {children}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500"
        />
      </div>
      {error && <p className="mt-1 text-xs font-medium text-red-500">{error}</p>}
    </div>
  );
}

export function RegisterSection() {
  const [searchParams] = useSearchParams();
  const preselectedClub = searchParams.get("club");
  const [form, setForm] = useState(() =>
    preselectedClub && CLUB_OPTIONS.includes(preselectedClub)
      ? { ...initialFormState, clubName: preselectedClub }
      : initialFormState
  );
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setPhoto(null);
      setPhotoPreview(null);
      return;
    }
    setPhoto(file);
    setErrors((prev) => ({ ...prev, photo: undefined }));
    const reader = new FileReader();
    reader.onload = () => setPhotoPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required.";
    if (!form.universityId.trim()) next.universityId = "University ID is required.";
    if (!form.campus) next.campus = "Please select your campus.";
    if (!form.department) next.department = "Please select your department.";
    if (!form.academicYear) next.academicYear = "Please select your academic year.";
    if (!form.dateOfBirth) next.dateOfBirth = "Date of birth is required.";
    if (!form.universityEmail.trim()) {
      next.universityEmail = "University email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.universityEmail)) {
      next.universityEmail = "Enter a valid email address.";
    }
    if (!form.mobileNumber.trim()) {
      next.mobileNumber = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(form.mobileNumber.trim())) {
      next.mobileNumber = "Enter a valid 10-digit mobile number.";
    }
    if (!form.gender) next.gender = "Please select your gender.";
    if (!form.residence) next.residence = "Please select your residence.";
    if (!form.clubName) next.clubName = "Please select a club.";
    if (!form.socialWing) next.socialWing = "Please select a wing.";
    if (!photo) next.photo = "Please upload your profile photo.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleRegisterAnother = () => {
    setForm(initialFormState);
    setPhoto(null);
    setPhotoPreview(null);
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <section className="section-shell flex min-h-[70vh] items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-[0_20px_60px_-15px_rgba(43,10,21,0.15)]"
        >
          <CheckCircle2 size={48} className="mx-auto text-[#6D0826]" />
          <h2 className="mt-4 font-display text-2xl font-extrabold text-[#272329]">
            Registration Submitted
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Thanks, {form.fullName.split(" ")[0] || "Student"}! Your Student Activity
            Center registration has been received.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={handleRegisterAnother}
              className="inline-flex items-center justify-center rounded-xl bg-[#6D0826] px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#430518]"
            >
              Register Another Student
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-[#6D0826] hover:text-[#6D0826]"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 py-20 sm:py-24 md:py-28">
      <div className="section-shell max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 transition-colors hover:text-[#6D0826]"
        >
          <ArrowLeft size={16} />
          Back
        </Link>

        <div className="mt-4 text-center">
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#6D0826]">
            STUDENT REGISTRATION
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Fill in your details to join the KLH Student Activity Center.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          noValidate
          className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-[0_20px_60px_-15px_rgba(43,10,21,0.1)]"
        >
          <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
            <TextField
              label="Full Name (as per SSC)"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={handleChange("fullName")}
              error={errors.fullName}
            />

            <TextField
              label="University ID"
              placeholder="Ex: 2200030000"
              value={form.universityId}
              onChange={handleChange("universityId")}
              error={errors.universityId}
            />

            <SelectField
              label="Campus"
              value={form.campus}
              onChange={handleChange("campus")}
              error={errors.campus}
            >
              <option value="" disabled className="text-slate-400">
                Select Campus
              </option>
              {CAMPUS_OPTIONS.map((option) => (
                <option key={option} value={option} className="text-[#272329]">
                  {option}
                </option>
              ))}
            </SelectField>

            <SelectField
              label="Department"
              value={form.department}
              onChange={handleChange("department")}
              error={errors.department}
            >
              <option value="" disabled className="text-slate-400">
                Select Department
              </option>
              {DEPARTMENT_OPTIONS.map((dept) => (
                <option key={dept.code} value={dept.code} className="text-[#272329]">
                  {dept.code} - {dept.full}
                </option>
              ))}
            </SelectField>

            <SelectField
              label="Academic Year"
              value={form.academicYear}
              onChange={handleChange("academicYear")}
              error={errors.academicYear}
            >
              <option value="" disabled className="text-slate-400">
                Select Year
              </option>
              {YEAR_OPTIONS.map((year) => (
                <option key={year} value={year} className="text-[#272329]">
                  {year}
                </option>
              ))}
            </SelectField>

            <TextField
              label="Date of Birth"
              type="date"
              value={form.dateOfBirth}
              onChange={handleChange("dateOfBirth")}
              error={errors.dateOfBirth}
            />

            <TextField
              label="University Email"
              type="email"
              placeholder="example@klh.edu.in"
              value={form.universityEmail}
              onChange={handleChange("universityEmail")}
              error={errors.universityEmail}
            />

            <TextField
              label="Mobile Number"
              type="tel"
              inputMode="numeric"
              maxLength={10}
              placeholder="10-digit number"
              value={form.mobileNumber}
              onChange={handleChange("mobileNumber")}
              error={errors.mobileNumber}
            />

            <SelectField
              label="Gender"
              value={form.gender}
              onChange={handleChange("gender")}
              error={errors.gender}
            >
              <option value="" disabled className="text-slate-400">
                Select Gender
              </option>
              {GENDER_OPTIONS.map((option) => (
                <option key={option} value={option} className="text-[#272329]">
                  {option}
                </option>
              ))}
            </SelectField>

            <SelectField
              label="Residence"
              value={form.residence}
              onChange={handleChange("residence")}
              error={errors.residence}
            >
              <option value="" disabled className="text-slate-400">
                Select Residence
              </option>
              {RESIDENCE_OPTIONS.map((option) => (
                <option key={option} value={option} className="text-[#272329]">
                  {option}
                </option>
              ))}
            </SelectField>

            <SelectField
              label="Club Name"
              value={form.clubName}
              onChange={handleChange("clubName")}
              error={errors.clubName}
            >
              <option value="" disabled className="text-slate-400">
                Select Club
              </option>
              {CLUB_OPTIONS.map((option) => (
                <option key={option} value={option} className="text-[#272329]">
                  {option}
                </option>
              ))}
            </SelectField>

            <SelectField
              label="Social Activity Wing Interest"
              value={form.socialWing}
              onChange={handleChange("socialWing")}
              error={errors.socialWing}
            >
              <option value="" disabled className="text-slate-400">
                Select Club
              </option>
              {SOCIAL_WING_OPTIONS.map((option) => (
                <option key={option} value={option} className="text-[#272329]">
                  {option}
                </option>
              ))}
            </SelectField>
          </div>

          {/* Profile Photo Upload */}
          <div className="mt-6">
            <FieldLabel>Profile Photo</FieldLabel>
            <label
              htmlFor="profile-photo"
              className={`flex cursor-pointer items-center gap-4 rounded-lg border border-dashed bg-slate-50 px-4 py-3 transition-colors hover:border-[#6D0826]/50 hover:bg-[#6D0826]/[0.03] ${
                errors.photo ? "border-red-400" : "border-slate-300"
              }`}
            >
              {photoPreview ? (
                <img
                  src={photoPreview}
                  alt="Profile preview"
                  className="h-12 w-12 shrink-0 rounded-md object-cover ring-1 ring-slate-200"
                />
              ) : (
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-slate-200/70 text-slate-400">
                  <ImageIcon size={20} />
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700">
                <UploadCloud size={14} />
                Choose File
              </span>
              <span className="truncate text-sm text-slate-500">
                {photo ? photo.name : "No file chosen"}
              </span>
              <input
                id="profile-photo"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="sr-only"
              />
            </label>
            {errors.photo && (
              <p className="mt-1 text-xs font-medium text-red-500">{errors.photo}</p>
            )}
            <p className="mt-2 text-xs font-medium text-[#6D0826]">
              Note: Please upload a professional, passport-style photo — this is the
              photo that will be printed on your certificate.
            </p>
          </div>

          <div className="mt-9 flex justify-center">
            <button
              type="submit"
              className="w-full max-w-xs rounded-xl bg-[#6D0826] px-8 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all hover:bg-[#430518] hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
            >
              Register Now
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}