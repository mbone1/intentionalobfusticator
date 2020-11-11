Intentional Obfusticator

Idea : As user types into an input field, an output field automatically converts each character into an 'obfusticated' version of itself.

Example : 

Unobfusticated text - Hello World
Obfusticated text - Ħɛʃɩʘ աӧꭆĿɗ

How to accomplish :

Create an array for each letter. Each array will have a variety of symbols from the character map that resemble that letter.

Example : let a = ['À', 'Ā', 'Ă', 'Ą', 'ą', 'à', 'Â', 'ã', 'â', 'å', 'ă' ];

A user is typing, one of these characters will be randomly selected in place of what the user typed, 'a' in this example case, which will then populate the output field.

BASE FUNCTIONALITY :

No options, user simply types and output field displays the 'obfusticated' text. Ignores lower/uppercase. Live updating, i.e. output populates as input is being typed.


Further/future features/ideas:

1. Levels of Obfustication - Allow for a user to set the level of 'obfustication' in output text.

To explain...

For the letter N/n, ɲ (defined as Latin Small Letter N with Left Hook) is a relatively straightforward and easy to recognize replacement.
These characters however, Ԯ Ӣ ή ͷ Π, require more of a leap to be seen as the letter N. This will lead to less legible and more 'obfusticated' text.

Could be set up as different arrays, output would target different arrays depending on level of 'obfustication' user selects.



