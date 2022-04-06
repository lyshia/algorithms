/* https://leetcode.com/problems/valid-anagram/

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false */

var isAnagram = function (s, t) {
	let str1 = [];
	let str2 = [];

	if (s.length != t.length) {
		return false;
	}

    for (let i = 0; i < s.length; i ++){
        str1.push(s[i])
        str2.push(t[i])
    }

    let s1 = str1.sort();
    let s2 = str2.sort();

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] != s2[i]) {
            return false;
        }
    }

    return true;
};

let s = 'rat',
	t = 'car';

console.log(isAnagram(s,t));