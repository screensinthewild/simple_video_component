screenbase_unity_video

Author:  Steve North
Author URI:  http://www.cs.nott.ac.uk/~pszsn/
License: AGPLv3 or later
License URI: http://www.gnu.org/licenses/agpl-3.0.en.html
Can: Commercial Use, Modify, Distribute, Place Warranty
Can't: Sublicence, Hold Liable
Must: Include Copyright, Include License, State Changes, Disclose Source
This research was originally funded in the UK under EPSRC grant reference EP/I031839/1 and title ‘Exploring the potential of networked urban screens for communities and culture’.

Copyright (c) 2015, The University of Nottingham

A simple HTML5 MP4 video player - designed for use in a single public-facing screen or across an urban screens network.

Features - custom video controls with just a seekbar functioning as a progress bar (input = disabled and no event handler) + Mute/Unmute audio button (to prevent public annoyance - when unmuted, re-mutes after an interval).
No play button
Customisable from CSS

Useage:

Include css:
<link rel="stylesheet" type="text/css" href="css/simple_video.css">

Include Javascript:
<script type="text/javascript" src="js/simple_video.js"></script>

Then...

var videoFileName = "<URL or relative path to MP4 video file>";
playVideo(videoFileName);

For example:
var videoFileName = "http://www.cs.nott.ac.uk/sitw/experiences/videos/adhd.mp4";
playVideo(videoFileName);