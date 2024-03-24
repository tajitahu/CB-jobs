@extends('admin.layouts.index')
@section('content')
<div class="container mt-5 p-5">
    <form id="uploadForm" action="{{ route('upload') }}" method="POST" enctype="multipart/form-data">
    @csrf
    <input type="file" name="file" class="form-control">
    <button type="submit" class="btn btn-info">Upload</button>
</form>

<div class="progress">
    <div id="progress-bar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
        <span id="progress-text"></span>
    </div>
</div>


@endsection
@section('scripts')
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    $(function () {
        $('#uploadForm').submit(function (e) {
            e.preventDefault();

            var fileInput = $('input[type="file"]')[0].files[0];
            var formData = new FormData();
            formData.append('file', fileInput);

            $.ajax({
                url: '/upload',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                xhr: function () {
                    var xhr = new window.XMLHttpRequest();
                    xhr.upload.addEventListener('progress', function (e) {
                        if (e.lengthComputable) {
                            var progress = Math.round((e.loaded / e.total) * 100);
                            $('#progress-bar').css('width', progress + '%').attr('aria-valuenow', progress);
                            $('#progress-text').text(progress + '%');
                        }
                    });

                    xhr.addEventListener('load', function (e) {
                        // File upload completed
                        $('#progress-bar').removeClass('progress-bar-animated');
                    });

                    return xhr;
                },
                success: function (response) {
                    console.log(response);
                    // Handle the server response after successful upload
                },
                error: function (error) {
                    console.error(error);
                    // Handle the error response
                }
            });
        });
    });
</script>
@endsection