<template>
    <div>
        <div id="content">
			<div class="section_header">
				РАСПИСАНИЕ
			</div>

			<div class="timetable">
				<div class="timetable_header">
					_ класс
				</div>

				<table class="timetable_table" cellspacing="0px">
					<tr>
						<td style="border-left: none; border-top: none; width: 24px; font-weight: bold;">№</td>
						<td style="border-left: 2px solid silver; border-top: none; font-weight: bold;">ПОНЕДЕЛЬНИК</td>
						<td style="border-left: 2px solid silver; border-top: none; font-weight: bold;">ВТОРНИК</td>
						<td style="border-left: 2px solid silver; border-top: none; font-weight: bold;">СРЕДА</td>
						<td style="border-left: 2px solid silver; border-top: none; font-weight: bold;">ЧЕТВЕРГ</td>
						<td style="border-left: 2px solid silver; border-top: none; font-weight: bold;">ПЯТНИЦА</td>
						<td style="border-left: 2px solid silver; border-top: none; font-weight: bold;">СУББОТА</td>
					</tr>

					<tr style="background-color: #ffd0d0;">
						<td style="border-left: none; border-top: 2px solid silver; width: 24px; font-weight: bold;">1</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr style="background-color: #ffedd0;">
						<td style="border-left: none; border-top: 2px solid silver; width: 24px; font-weight: bold;">2</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr style="background-color: #fffed0;">
						<td style="border-left: none; border-top: 2px solid silver; width: 24px; font-weight: bold;">3</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr style="background-color: #daffd0;">
						<td style="border-left: none; border-top: 2px solid silver; width: 24px; font-weight: bold;">4</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr style="background-color: #d0fffe;">
						<td style="border-left: none; border-top: 2px solid silver; width: 24px; font-weight: bold;">5</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr style="background-color: #d0e1ff;">
						<td style="border-left: none; border-top: 2px solid silver; width: 24px; font-weight: bold;">6</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>

					<tr style="background-color: #e4d0ff;">
						<td style="border-left: none; border-top: 2px solid silver; width: 24px; font-weight: bold;">7</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</table>
			</div>
			
			
		</div>
    </div>
</template>

<script>
    export default {
        name: 'main-section',

        data: function(){
            return{
                
            }
        }
    }
</script>

<style scoped>
    .timetable
    {
        margin-top: 100px;
    }








    .timetable_header
    {
        text-align: center;

        font-size: 25px;
        font-weight: bold;

        color: #004E8B;

        margin-bottom: 20px;
    }








    .timetable_table
    {
        border: 2px solid silver;

        font-size: 15px;

        margin: 0PX auto 0px auto;
    }
    .timetable_table td
    {
        width: 136px;

        text-align: center;

        border-top: 2px solid silver;
        border-left: 2px solid silver; 
    }
</style>
