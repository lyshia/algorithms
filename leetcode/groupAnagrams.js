/* https://leetcode.com/problems/group-anagrams/

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]] */

const groupAnagrams = (strs) => {
	let anagrams = {};
	let groups = [];

	for (let s of strs) {
		let letters = s.split('').sort();
		anagrams[letters] = anagrams[letters] || [];
		anagrams[letters].push(s);
	}

	for (let key in anagrams) {
		groups.push(anagrams[key]);
	}

	return groups;
};

let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

console.log(groupAnagrams(strs));
