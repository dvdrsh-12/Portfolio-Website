import { NextResponse } from 'next/server';
import connectMongoDB from '@/lib/mongodb';
import FormSubmission from '@/modals/email';
export async function POST(request) {
    const { email, subject, message } = await request.json();

    try {
        await connectMongoDB();

        const formSubmission = new FormSubmission({
            email,
            subject,
            message
        });

        await formSubmission.save();

        return NextResponse.json({ status: 'Ok', id: formSubmission._id }, { status: 200 });
    } catch (error) {
        console.error('ERROR', error);
        return NextResponse.json({ error: 'Error submitting form' }, { status: 500 });
    }
}