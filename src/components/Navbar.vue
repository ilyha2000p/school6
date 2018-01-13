<template>
    <div>
       <div id="menu">
			<a href="/"><div class="sections">ГЛАВНАЯ</div></a>
			<form method="GET" action="/news" id="news_button_form">
				<div class="sections">НОВОСТИ ШКОЛЫ</div>
			</form>
			<router-link to="/timetable"><div class="sections">РАСПИСАНИЕ</div></router-link>
			<form method="GET" action="/gallery" id="gallery_button_form">
				<div class="sections">ФОТОГАЛЕРЕЯ</div>
			</form>
			<div class="sections" style="padding-top: 5px;">ШКОЛЬНЫЙ КОЛЛЕКТИВ</div>
			<div class="sections" style="padding-top: 5px;">ДЕТЯМ И <br> РОДИТЕЛЯМ</div>
			<div class="sections" style="width: 174px; padding-top: 5px;">МЫ ГОРДИМСЯ <br> ВАМИ</div>
		</div>
    </div>
</template>

<script>
    export default {
        name: 'navbar',

        data: function(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>
