
README
React Training Project
This project is for practicing key React concepts like working with forms and fetching data from a server. Here's what we did:

1. Controlled Component
We made a component called ControlledForm. It’s a form where all inputs (text, checkbox, dropdown) are controlled by React state. This helps to manage and validate the data in real-time.

2. Uncontrolled Component
We created a form that doesn’t use React state to control its inputs. Instead, it uses refs to get the values directly from the DOM. This is another way to handle forms but with less control over the input.

3. Server Request
We built a component called UserPosts. It fetches a list of posts from an online API and displays them. The component also handles:

Loading state (shows "Loading..." while waiting for the data).
Error state (shows an error message if the fetch fails).
Success state (displays the list of posts when the fetch is successful).
