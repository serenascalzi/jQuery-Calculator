$(document).ready(function() {
	// Addition Function
	$("#add").on('click', function() {
	var num1 = $("#num_one").val()
	var num2 = $("#num_two").val()
	var ans = Number(num1) + Number(num2)
	$("#answer").val(ans)
	})
	// Subtraction Function
	$("#subtract").on('click', function() {
	var num1 = $("#num_one").val()
	var num2 = $("#num_two").val()
	var ans = Number(num1) - Number(num2)
	$("#answer").val(ans)
	})
	// Multiplication Function
	$("#multiply").on('click', function() {
	var num1 = $("#num_one").val()
	var num2 = $("#num_two").val()
	var ans = Number(num1) * Number(num2)
	$("#answer").val(ans)
	})
	// Division Function
	$("#divide").on('click', function() {
	var num1 = $("#num_one").val()
	var num2 = $("#num_two").val()
	var ans = Number(num1) / Number(num2)
	$("#answer").val(ans)
	})
})