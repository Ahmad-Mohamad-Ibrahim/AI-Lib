import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';
import ContactsForm from './Partials/ContactsForm';

export default function Contacts({ auth, success }) {
    return (
        <>
            {success && <div onClick={() => { success = false }} className="bg-emerald-500 mb-2 px-4 text-white rounded">{success}</div>}

            {
                auth?.user ? <AuthenticatedLayout
                    auth={auth}
                    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
                >
                    <Head title="Contact Us" />

                    <div className="py-12 flex justify-center items-center">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                            <div className="mx-auto p-4 sm:p-8 bg-primary shadow sm:rounded-lg">
                                <ContactsForm user={auth?.user} className="max-w-xl" />
                            </div>
                        </div>
                    </div>
                </AuthenticatedLayout>
                    :
                    <Guest
                        auth={auth}
                        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Profile</h2>}
                    >
                        <Head title="Contact Us" />

                        <div className="py-12 flex justify-center items-center">
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                                <div className="p-4 sm:p-8 bg-primary shadow sm:rounded-lg">
                                    <ContactsForm user={auth?.user} className="max-w-xl" />
                                </div>
                            </div>
                        </div>
                    </Guest>
            }
        </>
    );
}
