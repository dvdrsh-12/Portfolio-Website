import mongoose from 'mongoose';

const formSubmissionSchema = new mongoose.Schema({
    email: String,
    subject: String,
    message: String,
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

const FormSubmission = mongoose.models.FormSubmission || mongoose.model('FormSubmission', formSubmissionSchema);

export default FormSubmission;