import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import DashboardHeader from '../../components/DashboardHeader';
import { useUser } from '../../lib/profile/user-data';
import { useAuthContext } from '../../lib/user/AuthContext';

/**
 * The dashboard / hack center.
 *
 * Landing: /dashboard
 */
export default function Dashboard() {
  const { isSignedIn } = useAuthContext();
  const user = useUser();
  const role = user.permissions?.length > 0 ? user.permissions[0] : '';
  // Change this to check-in condition instead of signed in
  const checkin =
    !user || !isSignedIn ? (
      <p>
        It looks like you&apos;re not checked in! Please click{' '}
        <Link href="/dashboard/scan-in" passHref>
          <u>here</u>
        </Link>{' '}
        to check in to the event.
      </p>
    ) : (
      'You are successfully checked in!'
    );

  return (
    <div className="flex flex-wrap flex-grow">
      <Head>
        <title>HackPortal - Dashboard</title>
        <meta name="description" content="HackPortal's Dashboard" />
      </Head>

      {/* ghost section to fill in for fixed sidebar */}
      <section
        id="ghost"
        className="flex justify-center h-screen sticky top-0 lg:w-1/8 md:w-1/7 w-1/6"
      ></section>

      <section
        id="Sidebar"
        className="flex justify-center items-center h-screen fixed top-16 border-r-2 border-gray-600 lg:w-1/8 md:w-1/7 w-1/6 text-xs lg:text-sm text-center"
      >
        <div>Welcome, {!user || !isSignedIn ? 'hacker' : user.firstName}</div>
        <div className="text-indigo-500">{role}</div>
      </section>

      <section id="mainContent" className="px-6 py-3 w-5/6 lg:wd-7/8 md:w-6/7">
        <section id="subheader" className="w-full pb-6 sticky top-16">
          <DashboardHeader />
        </section>

        <div className="lg:text-xl text-md bg-indigo-100 p-4 rounded-md mb-6">{checkin}</div>

        <div className="flex flex-wrap my-16">
          <div className="md:w-3/5 w-screen h-96">
            <h1 className="md:text-3xl text-xl font-black">Spotlight</h1>
            <h3 className="md:text-xl text-md font-bold my-3">2 events are happening right now!</h3>
            <div className="h-72 bg-gray-100 w-5/6"></div>
          </div>

          <div className="md:w-2/5 w-screen h-96">
            <h1 className="md:text-3xl text-xl font-black">Announcements</h1>
            <div id="announcement-items" className="overflow-y-scroll h-9/10">
              <div
                id="announcement-content"
                className="bg-purple-200 md:min-h-1/4 min-h-1/2 rounded-lg p-3"
              >
                iluashdgilbngburiglbena
              </div>
              <p className="text-right">1:12 PM</p>
              <div
                id="announcement-content"
                className="bg-purple-200 md:min-h-1/4 min-h-1/2 rounded-lg p-3"
              >
                iluashdgilbngburiglbena
              </div>
              <p className="text-right">1:12 PM</p>
              <div
                id="announcement-content"
                className="bg-purple-200 md:min-h-1/4 min-h-1/2 rounded-lg p-3"
              >
                iluashdgilbngburiglbena
              </div>
              <p className="text-right">1:12 PM</p>
              <div
                id="announcement-content"
                className="bg-purple-200 md:min-h-1/4 min-h-1/2 rounded-lg p-3"
              >
                iluashdgilbngburiglbena
              </div>
              <p className="text-right">1:12 PM</p>
            </div>
          </div>
        </div>

        <div className="my-16">
          <h1 className="md:text-3xl text-xl font-black">Mentor Center</h1>
          <p className="my-3">
            Mentors are available 24/7 in ECSW 2.414! You may also see some walking around the
            building in
            <b> purple </b>
            shirts. We also have the following virtual judging rooms available right now:
          </p>
          <div className=" flex overflow-x-scroll w-full">
            <div className="h-80 min-w-64 bg-red-200 rounded-2xl mx-4"></div>
            <div className="h-80 min-w-64 bg-red-200 rounded-2xl mx-4"></div>
            <div className="h-80 min-w-64 bg-red-200 rounded-2xl mx-4"></div>
            <div className="h-80 min-w-64 bg-red-200 rounded-2xl mx-4"></div>
            <div className="h-80 min-w-64 bg-red-200 rounded-2xl mx-4"></div>
            <div className="h-80 min-w-64 bg-red-200 rounded-2xl mx-4"></div>
          </div>
        </div>

        <div className="flex flex-wrap h-96 my-16">
          <div className="md:w-3/5 w-screen bg-green-100">
            <h1 className="md:text-3xl text-xl font-black">Your Saved Events</h1>
          </div>
          <div className="md:w-2/5 w-screen bg-purple-200">
            <h1 className="md:text-3xl text-xl font-black">Your Team</h1>
            <div className="h-3/5 p-5 md:text-xl text-lg">Hackergang</div>
          </div>
        </div>
      </section>
    </div>
  );
}
