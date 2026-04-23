<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Directory File List</title>
    <!-- Import Atkinson Hyperlegible from Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    <style>
        body {
            /* Set font family, size (18pt), and color (#0046ad) */
            font-family: 'Atkinson Hyperlegible', sans-serif;
            font-size: 18pt;
            color: #0046ad;
            background-color: #f8f9fa;
            padding: 40px;
            margin: 0;
            line-height: 1.6;
        }

        h1 {
            font-weight: 700;
            border-bottom: 2px solid #0046ad;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            padding: 8px 0;
            border-bottom: 1px solid rgba(0, 70, 173, 0.1);
        }

        .file-link {
            text-decoration: none;
            color: #0046ad;
            transition: opacity 0.2s;
        }

        .file-link:hover {
            text-decoration: underline;
            opacity: 0.8;
        }

        .empty-msg {
            font-style: italic;
            opacity: 0.6;
        }
    </style>
</head>
<body>

    <h1>Files in this Directory</h1>

    <ul>
        <?php
        // Define the directory to scan (current directory)
        $directory = './';
        
        // Determine the current URL path to ensure links are relative to the current folder
        $currentPath = rtrim(dirname($_SERVER['PHP_SELF']), '/\\') . '/';

        // Scan the directory
        $files = scandir($directory);

        // Filter out the current and parent directory pointers
        $filteredFiles = array_diff($files, array('.', '..'));

        if (count($filteredFiles) > 0) {
            foreach ($filteredFiles as $file) {
                // Determine if item is a directory
                $isDir = is_dir($file) ? ' [Dir]' : '';
                
                // Construct the link using the current path prefix
                $fileUrl = $currentPath . rawurlencode($file);
                
                echo '<li><a class="file-link" href="' . htmlspecialchars($fileUrl) . '">' . htmlspecialchars($file) . $isDir . '</a></li><br />';
                echo '';
            }
        } else {
            echo '<li class="empty-msg">No files found in this directory.</li>';
        }
        ?>
    </ul>

</body>
</html>